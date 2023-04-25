import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'

import { Configuration, OpenAIApi } from 'openai'
import { env } from '~/env.mjs'

const configuration = new Configuration({
  apiKey: env.DALLE_API_KEY,
})

const openai = new OpenAIApi(configuration)

async function generateIcon(prompt: string): Promise<string | undefined> {
  if(env.MOCK_DALLE === 'true') {
    return "https://media.wired.com/photos/5b8999943667562d3024c321/master/w_2560%2Cc_limit/trash2-01.jpg"
  } else {
    const response = await openai.createImage({
      prompt, // ? Take what user typed in input
      n: 1,
      size: '1024x1024',
    })

    return response.data.data[0]?.url
  }
}

export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
    .input(
      z.object({
        prompt: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // * verify user has enough credits
      const { count } = await ctx.prisma.user.updateMany({
        where: {
          id: ctx.session.user.id,
          credits: {
            gte: 1,
          },
        },
        data: {
          credits: {
            decrement: 1,
          },
        },
      })

      if (count <= 0) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You do not have enough credits.',
        })
      }

      // TODO: make a fetch request to the DALLE API
      
      const url = await generateIcon(input.prompt)


      return {
        imageUrl: url,
      }
    }),
})

export function FormGroup(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex flex-col gap-2" {...props}>
      {props.children}
    </div>
  )
}

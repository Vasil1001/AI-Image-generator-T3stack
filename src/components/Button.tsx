export function Button(props: React.ComponentPropsWithoutRef<'button'>) {
  return <button {...props} className="rounded-md bg-blue-500 px-4 py-2 hover:bg-blue-600">{props.children} </button>
}

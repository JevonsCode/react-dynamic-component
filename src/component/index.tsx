import React from 'react'

interface IPropsDynamicComponent<T extends React.ElementType> {
  is?: T
  children?: React.ReactNode
}

type TPropsDynamicComponent<T extends React.ElementType> =
  IPropsDynamicComponent<T> & Omit<React.ComponentProps<T>, 'is' | 'children'>

/**
 * Dynamic component
 * @default is: div
 */
function DynamicComponent<E extends React.ElementType>({
  is,
  children,
  ...rest
}: TPropsDynamicComponent<E>) {
  const Component = is ?? 'div'

  return <Component {...rest}>{children}</Component>
}

export { DynamicComponent as Component }

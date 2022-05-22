import React from 'react'

interface IPropsDynamicComponent<T extends React.ElementType> {
  is?: T
  children?: React.ReactNode
}

/**
 * Dynamic component's props
 *
 * @params React.ElementType
 */
export type TPropsDynamicComponent<T extends React.ElementType> =
  IPropsDynamicComponent<T> & Omit<React.ComponentProps<T>, 'is' | 'children'>

/**
 * Dynamic component
 *
 * @params TPropsDynamicComponent
 *
 * @default is: div { <T extends React.ElementType> }
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

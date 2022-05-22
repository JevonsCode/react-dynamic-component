import React from 'react'
import { Component } from '../component'

function PinkBgButton({
  style,
  children,
}: {
  style: React.CSSProperties
  children: React.ReactNode
}) {
  return <button style={{ ...style, background: 'pink' }}>{children}</button>
}

export function Test() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
      }}
    >
      <Component
        is={PinkBgButton}
        style={{
          border: '3px solid #f68c60',
          borderRadius: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 30,
          width: 60,
        }}
      >
        2333
      </Component>
      <Component
        is={'a'}
        href="#"
        style={{
          border: '3px solid #db2828',
          borderRadius: 8,
          height: 30,
          width: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        2333
      </Component>
    </div>
  )
}

import tw from 'tailwind-styled-components'
// import styled from 'styled-components'

export const Card = tw.a`
  tw-p-6
  tw-mt-6
  tw-text-left
  tw-border
  tw-w-96
  tw-rounded-xl
  tw-hover:text-blue-600
  tw-focus:text-blue-600
`

export const CardTitle = tw.h3`
  tw-text-2xl
  tw-font-bold
`

export const CardDescription = tw.p`
  tw-mt-4
  tw-text-xl
`

export const Wrapper = tw.div`
  tw-flex
  tw-flex-col
  tw-items-center
  tw-justify-center
  tw-min-h-screen
  tw-py-2
`

export const Container = tw.main`
  tw-flex
  tw-flex-col
  tw-items-center
  tw-justify-center
  tw-flex-1
  tw-w-full
  tw-px-20
  tw-text-center
`
export const CardWrapper = tw.div`
  tw-flex
  tw-flex-wrap
  tw-items-center
  tw-justify-around
  tw-max-w-4xl
  tw-mt-6
  tw-sm:w-full
`

export const Title = tw.h1`
  tw-text-6xl
  tw-font-bold
`

export const Description = tw.p`
  tw-mt-3
  tw-text-2xl
`

export const Code = tw.code`
  tw-p-3
  tw-font-mono
  tw-text-lg
  tw-bg-gray-100
  tw-rounded-md
`

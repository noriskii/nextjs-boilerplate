import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'NextJS + TailwindCSS + StyledComponents + Storybook Boilerplate for ReactJS'
}) => (
  <S.Wrapper>
    <S.Container>
      <S.Title> {title}</S.Title>

      <S.Description>{description}</S.Description>

      <S.CardWrapper>
        <S.Card href="https://nextjs.org/docs">
          <S.CardTitle>Documentation &rarr;</S.CardTitle>
          <S.CardDescription>
            Find in-depth information about Next.js features and API.
          </S.CardDescription>
        </S.Card>

        <S.Card href="https://nextjs.org/learn">
          <S.CardTitle>Learn &rarr;</S.CardTitle>
          <S.CardDescription>
            Learn about Next.js in an interactive course with quizzes!
          </S.CardDescription>
        </S.Card>

        <S.Card href="https://github.com/vercel/next.js/tree/master/examples">
          <S.CardTitle>Examples &rarr;</S.CardTitle>
          <S.CardDescription>
            Discover and deploy boilerplate example Next.js projects.
          </S.CardDescription>
        </S.Card>

        <S.Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          <S.CardTitle>Deploy &rarr;</S.CardTitle>
          <S.CardDescription>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </S.CardDescription>
        </S.Card>
      </S.CardWrapper>
    </S.Container>
  </S.Wrapper>
)

export default Main

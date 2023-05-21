import Header from '../common/Header'

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default AppLayout

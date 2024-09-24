import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './global.css'

export const metadata = {
  title: 'Local Restaurant Review',
  description: 'Where Locals eat and recommend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

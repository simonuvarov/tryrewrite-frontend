import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'

function EmailConfirmation() {
  const router = useRouter()

  const { user, verifyEmail: confirmEmail, error } = useAuth()

  const { token } = router.query

  useEffect(() => {
    if (user) router.push('/dashboard')
  }, [user])

  useEffect(() => {
    if (!user) confirmEmail(token as string)
  }, [])

  useEffect(() => {
    if (error) alert('We were not able to confirm your email')
  }, [error])

  if (user) return null

  return (
    <Head>
      <title>We are confirming your email</title>
      <meta name="robots" content="noindex" />
    </Head>
  )
}

export default EmailConfirmation

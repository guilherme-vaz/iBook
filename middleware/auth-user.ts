export default async function ({ app, redirect}: any) {
    // the following look directly for the cookie created by nuxtjs/auth
    // instead of using $auth.loggedIn
    const user = await app.$cookies.get('auth._token.local')
    if (user) {
      // let the user see the page
      redirect('/dashboard')
    } else {
      // redirect to homepage
      redirect('/')
    }
  }
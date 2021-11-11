import { NextSeo } from 'next-seo'

const Privacy = () => {
  return (
    <>
      <NextSeo title="Privacy Policy" />
      <article className="prose mx-auto py-40 px-4 lg:prose-xl">
        <h1>Privacy policy</h1>
        <h2>What we collect and why</h2>
        <p>
          Our guiding principle is to collect only what we need. Here’s what
          that means in practice.
        </p>
        <h3>Identity & access</h3>
        <p>
          When you sign up for a Rewrite account, we typically ask for
          identifying information such as your email address. That’s just so you
          can personalize your new account, and we can send you invoices,
          updates, or other essential information. We might also give you the
          option to add a profile picture that displays in our products, but we
          do not normally look at or access that picture. We’ll never sell your
          personal info to third parties, and we won’t use your name or email
          address in marketing statements without your permission either.
        </p>
        <h3>Billing information</h3>
        <p>
          When you pay for a Rewrite service, we ask for your credit card and
          billing address. That’s so we can charge you for service, calculate
          taxes due, and send you invoices. Your credit card is passed directly
          to our Merchant of Record and doesn’t ever go through our servers.
        </p>
        <h3>Geolocation data</h3>
        <p>
          We log all access to all accounts by full IP address so that we can
          always verify no unauthorized access has happened. We keep this login
          data for as long as your product account is active. We also log full
          IP addresses used to sign up a product account. We keep this record
          forever for all our apps except for HEY, because they are used to
          mitigate spammy signups.
        </p>
        <h3>Website interactions</h3>
        <p>
          When you browse our marketing pages or applications, your browser
          automatically shares certain information such as which operating
          system and browser version you are using. We track that information,
          along with the pages you are visiting, page load timing, and which
          website referred you for statistical purposes like conversion rates
          and to test new designs. We sometimes track specific link clicks to
          help inform some design decisions. These web analytics data are tied
          to your IP address.
        </p>
        <h3>Cookies and Do Not Track</h3>
        <p>
          We do use persistent first-party cookies to store your session
          information. A cookie is a piece of information stored by your browser
          to help it remember your login information, site preferences, and
          more. You can adjust cookie retention settings in your own browser. To
          learn more about cookies, including how to view which cookies have
          been set and how to manage and delete them, please visit:
          www.allaboutcookies.org. At this time, our sites and applications do
          not respond to Do Not Track beacons sent by browser plugins.
        </p>
        <h3>Voluntary correspondence</h3>
        <p>
          When you write Rewrite with a question or to ask for help, we keep
          that correspondence, including the email address, so that we have a
          history of past correspondences to reference if you reach out in the
          future. We also store any information you volunteer like surveys.
          Sometimes when we do customer interviews, we may ask for your
          permission to record the conversation for future reference or use. We
          only do so if you give your express consent.
        </p>
        <h3>Information we do not collect</h3>
        <p>
          We don’t collect any characteristics of protected classifications
          including age, race, gender, religion, sexual orientation, gender
          identity, gender expression, or physical and mental abilities or
          disabilities. You may provide these data voluntarily, such as if you
          include a pronoun preference in your email signature when writing into
          our Support team. We also do not collect any biometric data. You are
          given the option to add a picture to your user profile, which could be
          a real picture of you or a picture of something else that represents
          you best. We do not extract any information from profile pictures:
          they are for your use alone.
        </p>
        <h2>How we secure your data</h2>
        <p>
          All data is encrypted via SSL/TLS when transmitted from our servers to
          your browser. The database backups are also encrypted. Passwords
          stored in the database are hashed and never stored as plain text.
        </p>
        <h2>Changes & questions</h2>
        <p>
          We may update this policy as needed to comply with relevant
          regulations and reflect any new practices.
        </p>
        <p>
          Have any questions, comments, or concerns about this privacy policy,
          your data, or your rights with respect to your information? Please get
          in touch by emailing us at{' '}
          <a href="mailto:privacy@tryrewrite.com">privacy@tryrewrite.com</a> and
          we’ll be happy to answer them!
        </p>
      </article>
    </>
  )
}

export default Privacy

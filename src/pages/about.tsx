import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Rolas Najera"
      description="Sr Software Engineer who always is looking for personal and professional growth.
        I'm convinced the world needs more better-prepared software engineers but also, better people.">
      <Head>
        <meta property="og:title" content="About Rolas Najera" />
        <meta
          property="og:description"
          content="In this page you can know more about my path."
        />
      </Head>
      <main className="container">
        <div className="mt-6">
          <p>You probably want to know more about my career experience, for that, you can review my
          <a
                  href="http://linkedin.com/in/rolasnajera"
                  target="_blank"
                  rel="noreferrer"
            >👉🏻LinkedIn profile.</a></p>
        </div>
        <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center rounded-[14px]">
          <h1 className="mb-4">This is my journey...</h1>
          <div
            style={{ maxHeight: '380px', overflowY: 'scroll', padding: '2px' }}
          >
            <ul className="mt-4 text-left pr-2">
              <p>2024 🏋🏻‍♂️ Is the year of my physical change.</p>
              <br />
              <p>
                2023 🇪🇸 Moved with my beautiful wife to Madrid, Spain.
              </p>
              <br />
              <p>2010 👨🏻‍🏫 I started my univeristy career path in the famous 
              <a
                  href="https://www.escom.ipn.mx"
                  target="_blank"
                  rel="noreferrer"
                >
                  ESCOM IPN</a></p>
              <br />
              <p>2007 📚 I came back to start to study in high school.</p>
              <br />
              <p>2003 👨🏻‍🔧 I droped the school to start working with my father selling clothes</p>
              <br />
              <p>2001 💻 First time I though I could invent a small computer that you can carry with your hands.</p>
              <br />
              <p>1989 🇲🇽 I was born in Mexico city.</p>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}

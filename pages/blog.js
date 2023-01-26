import { getSession } from 'next-auth/react';

const Blog = ({ data }) => {
  return (
    <div>
      <h1>Blog Page - {data}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          '/api/auth/signin?callbackUrl=https://nextjsmvvs9u-4vow--3000.local-credentialless.webcontainer.io/blog',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session ? 'List of 100 personalized blogs' : 'List of free blogs',
    },
  };
}

export default Blog;

import { GithubProfileResponse } from 'api/types';

interface Props {
  profile: GithubProfileResponse;
}

export default function Home({ profile }: Props) {
  // return <code>{JSON.stringify(profile)}</code>;
  return (
    <>
      <h1>React Notes & Bookmarks</h1>
      <iframe
        src="https://www.notion.so/React-31080c2481b14ce38818f35327b230e0"
        width="100%"
        height="800px"
        frameBorder="0"
      ></iframe>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/marco-souza`);
  const profile = await response.json();

  return { props: { profile } };
}

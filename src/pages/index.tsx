import { GithubProfileResponse } from 'api/types';

export interface HomeProps {
  profile: GithubProfileResponse;
}

export default function Home(): JSX.Element {
  // return <code>{JSON.stringify(profile)}</code>;
  return (
    <>
      <h1>React Notes & Bookmarks</h1>
      <iframe
        title="Notion React notes"
        src="https://www.notion.so/React-31080c2481b14ce38818f35327b230e0"
        width="100%"
        height="800px"
        frameBorder="0"
      />
    </>
  );
}

interface StaticProps {
  props: HomeProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const response = await fetch(`https://api.github.com/users/marco-souza`);
  const profile = await response.json();

  return { props: { profile } };
}

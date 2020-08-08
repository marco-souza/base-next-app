import { GithubProfileResponse } from 'api/types';

interface Props {
  profile: GithubProfileResponse;
}

export default function Home({ profile }: Props) {
  return <code>{JSON.stringify(profile)}</code>;
}

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/marco-souza`);
  const profile = await response.json();

  return { props: { profile } };
}

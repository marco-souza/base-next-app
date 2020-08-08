import { useEffect } from 'react';
import RetroWaveSection from 'components/RetroWareSection';

interface Repo {
  id: string;
  html_url: string;
  name: string;
  description: string;
}

interface Props {
  repos: Repo[];
}

export default function Home({ repos }: Props) {
  return <RetroWaveSection title="Welcome to" subtitle="Next.js base project" />;
}

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/marco-souza/repos`);
  const repos = await response.json();

  return { props: { repos } };
}

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
  return <RetroWaveSection title="Welcome to my" subtitle="Next React Project" />;
}

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/orgs/podcodar/repos`);
  const repos = await response.json();

  return { props: { repos } };
}

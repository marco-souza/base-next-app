import { Container } from './styled';

interface Props {
  title: string;
  subtitle: string;
}

export default function RetroWaveSection({ title, subtitle }: Props) {
  return (
    <>
      <Container>
        <div className="wrapper">
          <h1 data-text={title}>{title}</h1>
          <h2 data-text={subtitle}>{subtitle}</h2>
        </div>

        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/bg.svg" alt="background" />

        <div className="graph-container">
          <div className="graph" />
        </div>
      </Container>
    </>
  );
}

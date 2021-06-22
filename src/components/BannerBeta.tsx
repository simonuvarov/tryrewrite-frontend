import { Banner } from './Banner';

export const BannerBeta = () => {
  return (
    <Banner>
      <div>
        <span className="inline">
          🎉 We are currently in beta. Send us your feedback{' '}
        </span>
        <a
          className="inline underline hover:no-underline"
          href="mailto:feedback@tryrewrite.com"
        >
          here
        </a>
        .
      </div>
    </Banner>
  );
};

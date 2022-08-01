const positiveColor = '#36a64f';
const negativeColor = '#E52B50';

const positiveStatus = ['IN_PROGRESS', 'SUCCEEDED'];
// const negativeStatus = ['FAILED', 'STOPPED'];

export const getAttachment = ({
  buildStatus,
  githubURL,
  githubSourceVersion,
  buildId
}: {
  buildStatus: string;
  githubURL: string;
  githubSourceVersion: string;
  buildId: string;
}) => {
  const color = positiveStatus.includes(buildStatus) ? positiveColor : negativeColor;

  const isTag = new RegExp(/^(v[0-9]+\.[0-9]+\.[0-9]+)$/, 'g').test(githubSourceVersion)
  const shortHashCode = isTag ? githubSourceVersion : githubSourceVersion.substr(0,5);
  const githubLinkType = isTag ? 'releases/tag' : 'commit';

  const githubCommitLink = `${githubURL.replace('.git', '')}/${githubLinkType}/${githubSourceVersion}`;
  const buildIdBlocks = buildId.split(":");
  const codeBuildRegion = buildIdBlocks[3];
  const codeBuildPath = buildIdBlocks[5];
  const codeBuildId = buildIdBlocks[6];
  const codeBuildJobName = codeBuildPath.split('/')[1];

  const buildJobHistoryLink = `https://console.aws.amazon.com/codesuite/codebuild/projects/${codeBuildJobName}/build/${codeBuildJobName}:${codeBuildId}/log?region=${codeBuildRegion}`;
  return {
    attachments: [
      {
        color,
        author_name: `${codeBuildJobName}`.replace('codebuild-', ''),
        author_link: buildJobHistoryLink,
        title: `Git Commit: ${shortHashCode}`,
        title_link: githubCommitLink,
        text: 'Code Deployment',
        fields: [
          {
            title: 'Status',
            value: buildStatus,
            short: false
          }
        ]
      }
    ]
  };
};
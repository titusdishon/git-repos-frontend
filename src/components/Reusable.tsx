export const capitalizeFirstLetter = (repoName: string) => (
  <>{repoName.charAt(0).toUpperCase() + repoName.slice(1)}</>
);

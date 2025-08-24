export const initProgressBar = (progressBarId: string): void => {
  const progressBar = document.getElementById(progressBarId);

  if (!progressBar) {
    console.error(`Progress bar with id "${progressBarId}" element not found`);
    return;
  }

  progressBar.style.width = "0%";
};

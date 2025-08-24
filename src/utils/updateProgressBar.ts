export const updateProgressBar = (id: string): void => {
  const article = document.querySelector("article");

  if (!article) {
    console.error("Article element not found: can't use progress bar");
    return;
  }

  const progressBarMobile = document.getElementById(id);

  if (!progressBarMobile) {
    console.error("Progress bar element not found");
    return;
  }

  const articleHeight = article.offsetHeight;
  const articleOffsetTop = article.offsetTop;

  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (articleHeight && articleOffsetTop && scrollTop) {
    const progress =
      ((scrollTop - articleOffsetTop) / (articleHeight - window.innerHeight)) *
      100;

    progressBarMobile.style.width = `${progress}%`;
  }
};

export const updateProgressBar = (id: string): void => {
  console.log("updateProgressBar for", id);
  const article = document.querySelector("article");

  if (!article) {
    console.error("Article element not found: can't use progress bar");
    return;
  }

  const progressBarElement = document.getElementById(id);

  if (!progressBarElement) {
    console.error("Progress bar element not found");
    return;
  }

  const articleHeight = article.offsetHeight;
  const articleOffsetTop = article.offsetTop;

  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  console.log({ articleHeight, articleOffsetTop, scrollTop });

  if (articleHeight && articleOffsetTop && scrollTop) {
    const progress =
      ((scrollTop - articleOffsetTop) / (articleHeight - window.innerHeight)) *
      100;

    console.log("progress", progress);
    console.log("progressBarElement", progressBarElement);

    progressBarElement.style.width = `${progress}%`;
  }
};

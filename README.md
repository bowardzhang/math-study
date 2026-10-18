# Math Study

An English-first, static maths learning website for German primary and secondary school learners. The layout uses a topic navigation sidebar and a lesson area with explanations, visualisations, and practice activities.

## Live website

After GitHub Pages is enabled and the deployment workflow completes, the site will be available at:

https://bowardzhang.github.io/math-study/

## Topics

- **Comparing decimals and fractions** — embeds the existing [NumberOrdering interactive game](https://bowardzhang.github.io/NumberOrdering/) and links to its source repository.
- **Adding fractions with different denominators** — interactive circle diagrams show each fraction, the equivalent fractions after scaling to the least common multiple (LCM), and the resulting sum. Includes a quick multiple-choice practice activity.

More topics can be added over time.

## Deploy with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Pushes to `main` run the workflow in `.github/workflows/pages.yml`; it publishes the static files to GitHub Pages.

No build step or package installation is needed.

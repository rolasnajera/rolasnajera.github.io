<!-- Allow this file to not have a first line heading -->
<!-- markdownlint-disable-file MD041 no-emphasis-as-heading -->

<!-- inline html -->
<!-- markdownlint-disable-file MD033 -->

<div align="center">

<!--- FIXME: Pick an emoji and name your project! --->

# `💻 rolasnajera public repository template`

<!--- FIXME: Write short catchy description/tagline of project --->

**Template for creating new public repository in rolasnajera organization that follow the rolasnajera open source guidelines**

<!--- FIXME: Update crate, repo and CI workflow names here! Remove any that are not relevant --->

</div>

## TEMPLATE INSTRUCTIONS

1. Create a new repository under rolasnajera using this template.
1. **Title:** Change the first line of this README to the name of your project, and replace the computer with an
emoji that represents your project. 
1. **Badges:** In the badges section above, change the repo name in each URL. If you are creating something other
than a Rust crate, remove the crates.io and docs badges (and feel free to add more appropriate ones for your language).
1. **CI:** In `./github/workflows/` rename `rust-ci.yml` (or the appropriate config for your language) to `ci.yml`.
And go over it and adapt it to work for your project
   - If you aren't using or customized the CI workflow, also see the TODO in `.mergify.yml`
   - If you want to use the automatic rustdoc publishing to github pages for git main, see `rustdoc-pages.yml`
1. **Issue & PR Templates**: Review the files in `.github/ISSUE_TEMPLATE` and `.github/pull_request_template`. Adapt them
   to suit your needs, removing or re-wording any sections that don't make sense for your use case.
1. **CHANGELOG.md:** Change the `$REPO_NAME` in the links at the bottom to the name of the repository, and replace the
example template lines with the actual notes for the repository/crate.
1. **release.toml:** in `./release.toml` change the `$REPO_NAME` to the name of the repository
1. **Cleanup:** Remove this section of the README and any unused files (such as configs for other languages) from the repo.
1. **.gitignore** The initial template contains general gitignore file, be mindfull to add yours.

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/contributor%20covenant-v1.4-ff69b4.svg)](CODE_OF_CONDUCT.md)

We welcome community contributions to this project.

Please read our [Contributor Guide](CONTRIBUTING.md) for more information on how to get started.
Please also read our [Contributor Terms](CONTRIBUTING.md#contributor-terms) before you make any contributions.

Any contribution intentionally submitted for inclusion in a rolasnajera project, shall comply with the MIT OR Apache 2.0
and therefore be dual licensed as described below, without any additional terms or conditions:

### License

This contribution is dual licensed under EITHER OF

- Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or <http://opensource.org/licenses/MIT>)

at your option.

For clarity, "your" refers to rolasnajera or any other licensee/user of the contribution.

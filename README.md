# create-neon-manual-test-project

This project was bootstrapped by [create-neon](https://www.npmjs.com/package/create-neon).

## Building create-neon-manual-test-project

Building create-neon-manual-test-project requires a [supported version of Node and Rust](https://github.com/neon-bindings/neon#platform-support).

To run the build, run:

```sh
$ npm run build
```

This command uses the [@neon-rs/cli](https://www.npmjs.com/package/@neon-rs/cli) utility to assemble the binary Node addon from the output of `cargo`.

## Exploring create-neon-manual-test-project

After building create-neon-manual-test-project, you can explore its exports at the Node console:

```sh
$ npm i
$ npm run build
$ node
> require('.').greeting()
{ message: 'hello node' }
```

## Available Scripts

In the project directory, you can run:

#### `npm run build`

Builds the Node addon (`index.node`) from source, generating a release build with `cargo --release`.

Additional [`cargo build`](https://doc.rust-lang.org/cargo/commands/cargo-build.html) arguments may be passed to `npm run build` and similar commands. For example, to enable a [cargo feature](https://doc.rust-lang.org/cargo/reference/features.html):

```
npm run build -- --feature=beetle
```

#### `npm run debug`

Similar to `npm run build` but generates a debug build with `cargo`.

#### `npm run cross`

Similar to `npm run build` but uses [cross-rs](https://github.com/cross-rs/cross) to cross-compile for another platform. Use the [`CARGO_BUILD_TARGET`](https://doc.rust-lang.org/cargo/reference/config.html#buildtarget) environment variable to select the build target.

#### `npm run release`

Initiate a full build and publication of a new patch release of this library via GitHub Actions.

#### `npm run dryrun`

Initiate a dry run of a patch release of this library via GitHub Actions. This performs a full build but does not publish the final result.

#### `npm test`

Runs the unit tests by calling `cargo test`. You can learn more about [adding tests to your Rust code](https://doc.rust-lang.org/book/ch11-01-writing-tests.html) from the [Rust book](https://doc.rust-lang.org/book/).

## Project Layout

The directory structure of this project is:

```
create-neon-manual-test-project/
├── Cargo.toml
├── README.md
├── lib/
├── src/
|   ├── index.mts
|   └── index.cts
├── crates/
|   └── create-neon-manual-test-project/
|       └── src/
|           └── lib.rs
├── platforms/
├── package.json
└── target/
```

| Entry          | Purpose                                                                                                                                  |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `Cargo.toml`   | The Cargo [manifest file](https://doc.rust-lang.org/cargo/reference/manifest.html), which informs the `cargo` command.                   |
| `README.md`    | This file.                                                                                                                               |
| `lib/`         | The directory containing the generated output from [tsc](https://typescriptlang.org).                                                    |
| `src/`         | The directory containing the TypeScript source files.                                                                                    |
| `index.mts`    | Entry point for when this library is loaded via [ESM `import`](https://nodejs.org/api/esm.html#modules-ecmascript-modules) syntax.       |
| `index.cts`    | Entry point for when this library is loaded via [CJS `require`](https://nodejs.org/api/modules.html#requireid).                          |
| `crates/`      | The directory tree containing the Rust source code for the project.                                                                      |
| `lib.rs`       | Entry point for the Rust source code.                                                                                                          |
| `platforms/`   | The directory containing distributions of the binary addon backend for each platform supported by this library.                          |
| `package.json` | The npm [manifest file](https://docs.npmjs.com/cli/v7/configuring-npm/package-json), which informs the `npm` command.                    |
| `target/`      | Binary artifacts generated by the Rust build.                                                                                            |

## Learn More

Learn more about:

- [Neon](https://neon-bindings.com).
- [Rust](https://www.rust-lang.org).
- [Node](https://nodejs.org).

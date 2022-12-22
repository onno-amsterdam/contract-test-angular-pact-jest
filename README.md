# CONTRACT TEST ANGULAR PACT JEST

This project is a demo of contract testing an Angular application with Pact and Jest.

Contract testing is a very powerfull way of testing the communications between applications and services and Pact is a very useful tool to do this with.

### System

This project was created with the following versions:

```
Angular CLI: 15.0.4
Node: 19.3.0 (Unsupported)
Package Manager: npm 9.2.0
OS: win32 x64
```

## Get started

Clone this project, run:

```bash
$ git clone https://github.com/onno-amsterdam/contract-test-angular-pact-jest.git
```

Install the project, run from demo-app folder:

```bash
$ npm i
```

Run the contract tests with the command:

```bash
$ npm run test:contract:consumer
```

## Issues

The issue below can manifast itself due the length of the files paths in the dependencies. You can fix this by shortening the path, update the name of the project to something short like: ctapj.

```
[2022-12-21 15:43:14.829 +0000] ERROR (23544 on ONNO-LAPTOP): pact-node@10.17.6: Pact Binary Error: C:/Development/contract-test-angular-pact-jest/demo-app/node_modules/@pact-foundation/pact-node/standalone/win32-1.89.02-rc1/pact/lib/ruby/lib/ruby/2.4.0/rubygems/core_ext/kernel_require.rb:55:in `require': cannot load such file -- bundler/vendor/molinillo/lib/molinillo/dependency_graph/add_edge_no_circular (LoadError)
        from C:/Development/contract-test-angular-pact-jest/demo-app/node_modules/@pact-foundation/pact-node/standalone/win32-1.89.02-rc1/pact/lib/ruby/lib/ruby/2.4.0/rubygems/core_ext/kernel_require.rb:55:in `require'
        from C:/Development/contract-test-angular-pact-jest/demo-app/node_modules/@pact-foundation/pact-node/standalone/win32-1.89.02-rc1/pact/lib/ruby/lib/ruby/gems/2.4.0/gems/bundler-1.17.3/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/log.rb:3:in `<top (required)>'
        from C:/Development/contract-test-angular-pact-jest/demo-app/node_modules/@pact-foundation/pact-node/standalone/win32-1.89.02-rc1/pact/lib/ruby/lib/ruby/2.4.0/rubygems/core_ext/kernel_require.rb:55:in `require'
```

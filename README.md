# nos-timing

A small project to quickly export from Bikereg.com for import into the NOS timing system without having to pull it up on the timing computer

> TODOS
> - [ ] Get USAC Road Level from BikeReg API or from USAC directly. It's not contained in the export. Some things look like that value, but are always 0 whereas from the export in BikeReg the value is present

## Running

Create a `.env` file with contents of `.env.example`. Replace with bikereg.com login credentials

Click on `timing-export.exe` to run and export csv for the current days race.

## Development

To install dependencies:

```bash
bun install
```

To run:

TODO fix this V - pretty sure this can be done better

```bash
bun run run
```

To build:

```bash
bun run build
```

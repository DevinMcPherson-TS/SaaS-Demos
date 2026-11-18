# Lista Design Works

Marketing site for Lista Design Works, a residential interior design and remodeling studio. The logo and final color direction are not in this version yet. The current palette is a stand-in.

## Pages

- `/` — home, including why people hire the studio
- `/services` — capabilities
- `/process` — how a project runs
- `/portfolio` — illustrated room studies
- `/about` — approach
- `/appointment` — appointment request form

## Run

```bash
cd lista-design-works
npm install
npm run dev
```

Open http://localhost:3000

## Appointment requests

`POST /api/appointments` validates the body and appends one JSON record to `data/appointments.json`.

The file is created on the first successful request and is gitignored, so visitor details are not committed. There is no database in this repo. Writes are serialized in the Node process so two submissions do not overwrite each other.

Each record stores:

- `id`
- `reference` (shown on the success screen, shaped like `LDW-XXXXXXXX`)
- `name`
- `contact` (email or phone)
- `preferredTime`
- `projectType`
- `note`
- `createdAt`

The form shows field errors when a request is incomplete or invalid, and a confirmation with the reference when it is saved. If the file cannot be written, the form shows an error and keeps what was typed. Nothing is emailed, and nothing is charged.

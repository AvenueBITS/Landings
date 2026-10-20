# avenuebits.github.io

Landing de AvenueBits publicada en https://avenuebits.github.io/

## Desarrollo

```bash
npm ci
npm run dev     # servidor local
npm run build   # genera dist/
```

## Publicación

Cada merge a `main` compila y publica la web con GitHub Actions
(`.github/workflows/deploy.yml`).

`main` está protegida: los cambios entran solo por pull request,
fusionados con **Squash and merge**.

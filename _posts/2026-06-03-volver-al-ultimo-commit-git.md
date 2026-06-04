---
title: volver al último commit Git
---

Para volver al último commit en tu máquina, abre la terminal en tu proyecto y usa:
bash# Ver los últimos commits
`git log --oneline`

## Descartar todos los cambios no guardados (vuelve al último commit)
`git checkout .`

# O si ya hiciste commit y quieres revertir:
```
git revert HEAD
```

# O para resetear al commit anterior (más drástico, borra el commit):
`git reset --hard HEAD~1`

# HEIC to JPG Conversion Workflow (Portfolio Gallery)

This document captures the exact process used to make iPhone `.heic` images web-compatible for this portfolio.

## What Was Done

1. Confirmed ImageMagick is installed and supports HEIC:

```powershell
magick -version
```

2. Converted HEIC files to JPG while keeping originals.

3. Verified JPG outputs were created next to each HEIC file.

4. Confirmed site code has no `.heic` references left.

## Why This Is Needed

Most browsers do not reliably display HEIC directly in image tags. JPG/WebP are safer for web galleries.

## Project Paths Used

- Project root: `C:\Users\fabio\github-portfolio`
- Gallery images: `C:\Users\fabio\github-portfolio\img\gallery`
- Project images: `C:\Users\fabio\github-portfolio\img\projects`

## Conversion Commands

### A) Convert HEIC under img/projects

```powershell
Get-ChildItem -Path .\img\projects -Recurse -File -Include *.heic,*.HEIC | ForEach-Object { magick $_.FullName -auto-orient -quality 90 ($_.DirectoryName + "\\" + $_.BaseName + ".jpg") }
```

### B) Convert HEIC under img/gallery

```powershell
Get-ChildItem -Path .\img\gallery -Recurse -File -Include *.heic,*.HEIC | ForEach-Object { magick $_.FullName -auto-orient -quality 90 ($_.DirectoryName + "\\" + $_.BaseName + ".jpg") }
```

### C) If `magick` is not recognized

Use full executable path:

```powershell
Get-ChildItem -Path .\img\gallery -Recurse -File -Include *.heic,*.HEIC | ForEach-Object { & "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe" $_.FullName -auto-orient -quality 90 ($_.DirectoryName + "\\" + $_.BaseName + ".jpg") }
```

## Validation Commands

### Count HEIC files

```powershell
(Get-ChildItem -Path .\img\gallery -Recurse -File -Include *.heic,*.HEIC).Count
```

### Check JPG files were created

```powershell
Get-ChildItem -Path .\img\gallery -Recurse -File -Include *.jpg,*.JPG | Select-Object -First 30 FullName
```

### Find leftover `.heic` references in code

```powershell
Get-ChildItem -Recurse -File -Include *.html,*.js,*.css | Select-String -Pattern "\.heic|\.HEIC"
```

Expected result: no matches.

## Optional Cleanup (Delete HEIC Only If JPG Exists)

Run this only after you verify JPGs look correct:

```powershell
Get-ChildItem -Path .\img\gallery -Recurse -File -Include *.heic,*.HEIC | Where-Object { Test-Path ($_.DirectoryName + "\\" + $_.BaseName + ".jpg") } | Remove-Item -Force
```

This safely removes HEIC files only when a same-name JPG is present.

## Reusable Prompt (for future Copilot sessions)

```text
Convert all HEIC files under img/gallery and img/projects to JPG using ImageMagick, keep originals, verify every HEIC has a JPG pair, then scan HTML/JS/CSS for any leftover .heic references and report results.
```

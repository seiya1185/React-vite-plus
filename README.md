# 環境構築テンプレート

## 概要

このテンプレートは、**scaffoldingツールで自由にプロジェクトを構築した後、Docker で起動する**ことを前提とした構成です。
`apps/web` と `apps/api` のディレクトリ構成はプロジェクトごとに自由に決められます。

## 構成

- モノレポ構成
- パッケージマネージャー: Bun

| サービス | 技術スタック | ポート |
|---|---|---|
| web (`apps/web`) | Next.js + TypeScript | 3000 |
| api (`apps/api`) | Hono + TypeScript | 8787 |

## 使い方

### 1. リポジトリをクローン

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. 各アプリをscaffoldingで作成

```bash
# Next.js（オプションはプロジェクトに合わせて自由に設定）
bunx create-next-app apps/web

# Hono
bunx create-hono apps/api
```

### 3. 起動

```bash
docker compose up
```

`bun install` はコンテナ起動時に自動で実行されます。

- web: http://localhost:3000
- api: http://localhost:8787

## ディレクトリ構成

```
.
├── docker-compose.yml
├── docker/
│   ├── web/
│   │   └── Dockerfile
│   └── api/
│       └── Dockerfile
└── apps/          # scaffolding で生成（git 管理対象）
    ├── web/
    └── api/
```

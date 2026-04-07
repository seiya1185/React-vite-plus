# 環境構築テンプレート

## 概要

このテンプレートは、**scaffoldingツールで自由にプロジェクトを構築した後、Docker で起動する**ことを前提とした構成です。
`apps/web` と `apps/api` のディレクトリ構成はプロジェクトごとに自由に決められます。

## 構成

- モノレポ構成
- パッケージマネージャー: Yarn

| サービス | 技術スタック | ポート |
|---|---|---|
| web (`apps/web`) | React + TypeScript + Vite+ | 5173 |
| api (`apps/api`) | Hono + TypeScript | 8787 |

## 使い方

### 1. リポジトリをクローン

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. 各アプリをscaffoldingで作成

```bash
# Vite+（オプションはプロジェクトに合わせて自由に設定）
# 詳細: https://viteplus.dev/guide/create
vp create

# Hono
yarn create hono apps/api
```

> **注意:** Vite+ はグローバルインストールが必要です。未インストールの場合は先にセットアップしてください。
> ```bash
> curl -fsSL https://vite.plus | bash
> ```

### 3. 起動

```bash
docker compose up
```

`yarn install` はコンテナ起動時に自動で実行されます。また、`apps/web/vite.config.ts` にて `server.host: true` の設定が必要です（下記参照）。

- web: http://localhost:5173
- api: http://localhost:8787

### Vite の Docker 向け設定

コンテナ内から外部にアクセスできるよう、`apps/web/vite.config.ts` に以下を追加してください。

```ts
export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
})
```

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

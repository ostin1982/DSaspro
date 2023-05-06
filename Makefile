start:
	pnpm dev

supabase-start:
	supabase start --ignore-health-check

supabase-stop:
	supabase stop

supabase-db-reset:
	supabase db reset

supabase-db-push:
	supabase db push

supabase-db-remote-commit:
	supabase db remote commit

supabase-db-diff:
	supabase db diff --schema public

supabase-new-migration:
	supabase migration new $(name)

supabase-gen-types:
	supabase gen types typescript --project-id qrwpebanuhwjconwtokw --schema public > ./src/shared/api/types_db.ts

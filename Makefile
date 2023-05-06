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

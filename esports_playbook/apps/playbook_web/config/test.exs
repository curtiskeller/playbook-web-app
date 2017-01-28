use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :playbook_web, PlaybookWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

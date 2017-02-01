# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :playbook_api, PlaybookApi.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "hbo9YCL0AVh06S76qtRst9gvYSLAQhNzcWh12bLmSPE7SSjoT0jGKqpiMGCzbiG2",
  render_errors: [view: PlaybookApi.ErrorView, accepts: ~w(json)],
  pubsub: [name: PlaybookApi.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

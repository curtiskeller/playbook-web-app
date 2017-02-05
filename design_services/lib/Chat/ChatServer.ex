defmodule DesignServices.ChatServer do
	use GenServer

	# Interface Functions

	def start_link() do
		GenServer.start_link(__MODULE__, [])
	end

  # Callbacks
end
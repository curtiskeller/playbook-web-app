defmodule DesignServices.PlayDesign do
	use GenServer

	# Interface Functions

	def start_link(state) do
		GenServer.start_link(__MODULE__, state, [])
	end

	def get_play(pid) do
		GenServer.call(pid, :get_play)
	end

	def update(pid, new_state) do
		GenServer.call(pid, { :update, new_state })
	end
	# Callbacks

	def init(state) do
		{ :ok, state }
	end
	
	def handle_call(:get_play, _from, state) do
		{ :reply, state, state }
	end

	def handle_call({ :update, new_state }, _from, state) do
		{ :reply, new_state, new_state}
	end
end
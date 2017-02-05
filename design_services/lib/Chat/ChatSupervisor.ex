defmodule DesignServices.ChatSupervisor do
  use Supervisor

  def start_link do
    Supervisor.start_link(__MODULE__, [], name: __MODULE__)
  end

  def start_child do
  	Supervisor.start_child(__MODULE__,[])	
  end

  def init(_args) do
    children = [
		worker(DesignServices.ChatServer, [], restart: :transient)
	]

	supervise(children, strategy: :simple_one_for_one)
  end
end
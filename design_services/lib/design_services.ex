defmodule DesignServices do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec
    children = [
      supervisor(DesignServices.PlayDesignSupervisor, [], [name: PlayDesignSupervisor]),
      supervisor(Registry, [:unique, :design_process_registry])
    ]

    opts = [strategy: :one_for_one, name: __MODULE__]
    Supervisor.start_link(children, opts)
  end

end

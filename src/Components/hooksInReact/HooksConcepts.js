import UseCallBack from "./useCallback/UseCallBack";
import UseEffectHook from "./UseEffectHook";
import UseMemoHook from "./UseMemoHook";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";

const HooksConcepts = () => {
  return(
    <div className="container">
      <UseEffectHook />
      <hr/>
      <UseReducerHook />
      <hr/>
      <UseCallBack />
      <hr/>
      <UseMemoHook />
      <hr/>
      <UseRefHook />
    </div>
  )
}

export default HooksConcepts;
import { useState } from "react";

const Formulario = () => {
  const [input, setInput] = useState({
    a: "",
    b: "",
  });
  const [output, setOutput] = useState({
    AxB: "",
    BxA: "",
  });

  const trimmer = (str) => {
    str = str.split(" ");
    str = str.filter((elem) => !!elem);
    return str.join(" ");
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let a = input.a;
    let b = input.b;

    a = a.split(",");
    b = b.split(",");

    a = a.map((elem) => trimmer(elem));
    a = a.filter((elem) => !!elem);

    b = b.map((elem) => trimmer(elem));
    b = b.filter((elem) => !!elem);

    let axb = [];
    let bxa = [];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        axb.push(`(${a[i]},${b[j]})`);
      }
    }
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
        bxa.push(`(${b[i]},${a[j]})`);
      }
    }

    axb = axb.join(",");
    bxa = bxa.join(",");

    setOutput({
      AxB: axb,
      BxA: bxa,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center my-3">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="a" className="form-label">
                A =
              </label>
              <input
                type="text"
                className="form-control mb-4"
                id="a"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="b" className="form-label">
                B =
              </label>
              <input
                type="text"
                className="form-control mb-4"
                id="b"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 text-center">
              <button type="submit" className="btn btn-primary">
                Calcular
              </button>
            </div>
          </form>
        </div>
        <p className="fs-5 lh-lg mb-4">
          AxB = {"{"}{output.AxB}{"}"}
        </p>
        <p className="fs-5 lh-lg mb-4">
        BxA = {"{"}{output.BxA}{"}"}
        </p>
      </div>
    </div>
  );
};

export default Formulario;

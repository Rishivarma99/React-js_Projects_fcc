import { useState } from "react";
import "./Accordian_style.css";
const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    show: false,
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    show: false,
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    show: false,
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
    show: false,
  },
];

const AccordionApp = () => {
  const [selected, setSelected] = useState(null);
  const [enablemultiselection, setenablemultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSeclection = (currentId) => {
    // if click id is the selcted on then keep null so that that is not displayed
    setSelected(currentId == selected ? null : currentId);
  };

  const handlemultiselection = (currentId) => {
    // if click id is the selcted on then keep null so that that is not displayed
    let cpyMultiple = [...multiple];

    let getIndexOfId = cpyMultiple.indexOf(currentId);

    if (getIndexOfId == -1) {
      // not there
      cpyMultiple.push(currentId);
    } else {
      cpyMultiple.splice(getIndexOfId, 1);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className="accordionContainer">
      <button
        type="button"
        className="btn btn-secondary selection-btn"
        onClick={() => setenablemultiselection(!enablemultiselection)}
      >
        Enable multi selection
      </button>

      <div className="accordionQuestions">
        {data && data.length !== 0 ? (
          <div className="accordion accordion-main" id="accordionExample">
            {data.map((que) => (
              <div className="accordion-item" key={que.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={() => {
                      enablemultiselection
                        ? handlemultiselection(que.id)
                        : handleSingleSeclection(que.id);
                    }}
                  >
                    {que.question}
                  </button>
                </h2>
                {enablemultiselection
                  ? multiple.includes(que.id) == true && (
                      <div
                        id="collapseOne"
                        className={`"accordion-collapse collapse"
                    }`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{que.answer}</div>
                      </div>
                    )
                  : selected == que.id && (
                      <div
                        id="collapseOne"
                        className={`"accordion-collapse collapse"
                    }`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{que.answer}</div>
                      </div>
                    )}
              </div>
            ))}
          </div>
        ) : (
          <h1>nothing </h1>
        )}
      </div>
    </div>
  );
};
export default AccordionApp;

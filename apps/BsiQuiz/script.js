document.addEventListener('DOMContentLoaded', function() {
  // Quiz-Daten
  const quizData = {
    "meta": {
      "title": "Übungsfragen für den BSI-Grundschutz Praktiker",
      "author": "Jean-Christoph von Oertzen",
      "licence": "CC BY 3.0 DE <https://creativecommons.org/licenses/by/3.0/de/>",
      "homepage": "https://jeanchristophvonoertzen.com",
      "contributors": []
    },
    "quiz": {
      "Einstieg": {
        "7": {
          "question": "Welche Informationen beinhaltet die IT-Grundschutz-Methodik (BSI-Standard 200-2)?",
          "answers": {
            "A": "besonders schutzwürdigen Komponenten",
            "B": "methodische Hilfestellungen zur schrittweisen Einführung eines ISMS",
            "C": "wie die Informationssicherheit im laufenden Betrieb aufrechterhalten und kontinuierlich verbessert werden kann",
            "D": "effiziente Verfahren, um die allgemeinen Anforderungen des BSI-Standards 200-1 zu konkretisieren"
          },
          "right": ["B", "C", "D"]
        },
        "8": {
          "question": "Welche Schichten gehören zu den Prozess-Bausteinen im IT-Grundschutz-Kompendium?",
          "answers": {
            "A": "ISMS",
            "B": "APP",
            "C": "OPS",
            "D": "DER"
          },
          "right": ["A", "C", "D"]
        },
        "9": {
          "question": "Welche Schichten gehören zu den Sytem-Bausteinen im IT-Grundschutz-Kompendium?",
          "answers": {
            "A": "IND",
            "B": "APP",
            "C": "NET",
            "D": "INF"
          },
          "right": ["A", "B", "C", "D"]
        },
        "10": {
          "question": "Was gehört zu den Aufgaben des IT Grundschutz nach BSI?",
          "answers": {
            "A": "systematisch nach Schwachstellen suchen",
            "B": "die Angemessenheit umgesetzter Schutzmaßnahmen prüfen",
            "C": "Sicherheitskonzepte entwickeln und fortzuschreiben die allgemein anerkannten Standards genügen",
            "D": "Das Management von der Haftung auszunehmen"
          },
          "right": ["A", "B", "C"]
        }
      },
      "Sicherheitsmanagement": {
        "7": {
          "question": "Welche Aussagen zur Norm ISO/IEC 27002 sind richtig?",
          "answers": {
            "A": "Sie gibt Rahmenempfehlungen zum Risikomanagement für Informationssicherheit",
            "B": "spezifiziert Anforderungen an die Akkreditierung von Zertifizierungsstellen für ISMS",
            "C": "Beschreibung von Sicherheitsmaßnahmen",
            "D": "Die Umsetzung der Sicherheitsempfehlungen ist eine von vielen Möglichkeiten, die Anforderungen der ISO-Norm 27001 zu erfüllen"
          },
          "right": ["C", "D"]
        },
        "8": {
          "question": "Welche Aussagen zur Norm ISO/IEC 31010 sind richtig?",
          "answers": {
            "A": "Sie beschreibt wie die Risikobeurteilung in ein Risikomanagementsystem integriert werden kann",
            "B": "spezifiziert Anforderungen an die Akkreditierung von Zertifizierungsstellen für ISMS",
            "C": "Enthält die Spezifika der ISMS-Zertifizierungsprozesse",
            "D": "Gibt Rahmenempfehlungen zum Risikomanagement für Informationssicherheit"
          },
          "right": ["A", "C"]
        },
        "9": {
          "question": "Welche Art von Schutz hat Informationssicherheit zum Ziel?",
          "answers": {
            "A": "Informationen jeglicher Art und Herkunft zu schützen",
            "B": "Den Schutz elektronisch gespeicherter Informationen und deren Verarbeitung",
            "C": "Den Schutz von Informationen in den Köpfen der Mitarbeiter",
            "D": "Den Schutz von Informationen auf Papier"
          },
          "right": ["A", "B", "C", "D"]
        },
        "10": {
          "question": "Was sind neben Vertraulichkeit, Integrität und Verfügbarkeit weitere generische Oberbegriffe der Informationssicherheit?",
          "answers": {
            "A": "Authentizität",
            "B": "Verbindlichkeit",
            "C": "Kontinuum",
            "D": "Resilienz"
          },
          "right": ["A", "B", "D"]
        },
        "11": {
          "question": "Was zeichnet einen Informationsverbund im Sinne des BSI-Grundschutz aus?",
          "answers": {
            "A": "eine Mindestgröße von 20 Elementen",
            "B": "ein festgelegter Geltungsbereich",
            "C": "eine sinnvolle Mindestgröße",
            "D": "Teilbereiche sollten gut abgrenzbar sein"
          },
          "right": ["B", "C", "D"]
        },
        "12": {
          "question": "Welche Informationen und Detailangaben müssen bei der Erstaufnahme des Informationsverbundes unter anderem erfasst werden?",
          "answers": {
            "A": "Geschäftsprozesse im Informationsverbund (Name, Beschreibung, fachverantwortliche Stelle)",
            "B": "IT-Systeme und ICS-Komponenten (Name, Systemplattform und eventuell Aufstellungsort)",
            "C": "Verantwortliche Stellen und Behörden (Name, Ansprechpartner, Telefonnummern)",
            "D": "virtuelle Systeme (entsprechend gekennzeichnet und benannt)"
          },
          "right": ["A", "B", "D"]
        },
        "13": {
          "question": "Was sind Zielobjekte des Sicherheitskonzepts?",
          "answers": {
            "A": "Alle IT-Systeme einer Institution",
            "B": "Alle in der Erstaufnahme ermittelten Komponenten",
            "C": "Ausschließlich die Mitarbeiter auf Ebene der Geschäftsführung",
            "D": "Die angemieteten Gebäude einer Institution"
          },
          "right": ["B"]
        },
        "14": {
          "question": "Was sind geeignete technische und organisatorische Maßnahmen in einem Sicherheitskonzept?",
          "answers": {
            "A": "Maßnahmen zur physischen Absicherung von Gebäuden und Räumlichkeiten",
            "B": "ausreichende Datensicherungsverfahren",
            "C": "Verfahren zur Messung der Mitarbeiterzufriedenheit",
            "D": "Sicherstellen der pünktlichen Zahlung von Abgaben und Gehältern"
          },
          "right": ["A", "B"]
        },
        "15": {
          "question": "Was sind geeignete Auswahlkriterien für Sicherheitsmaßnahmen?",
          "answers": {
            "A": "Empfehlung der Geschäftsführung",
            "B": "Auswirkungen auf das Sicherheitsniveau",
            "C": "Kosten-Nutzen-Aspekte",
            "D": "Praxistauglichkeit"
          },
          "right": ["B", "C", "D"]
        }
      },
      "Strukturanalyse": {},
      "Schutzbedarfsfeststellung": {
        "7": {
          "question": "Wovon hängt der Schutzbedarf eines Objekts besonders ab?",
          "answers": {
            "A": "vom Schutzbedarf derjenigen Geschäftsprozesse, für deren Bearbeitung es benötigt wird",
            "B": "vom Schutzbedarf derjenigen Informationen, für deren Bearbeitung es benötigt wird",
            "C": "vom Schutzbedarf derjenigen Anwendungen, für deren Bearbeitung es benötigt wird",
            "D": "vom Schutzbedarf derjenigen Räume, für deren Bearbeitung es benötigt wird"
          },
          "right": ["A", "B"]
        },
        "8": {
          "question": "Was bedeutet das Maximumprinzip im Zusammenhang mit der Schutzbedarffeststelltung?",
          "answers": {
            "A": "Das ein maximaler Schutz für einen Informationsverbund anzustreben ist",
            "B": "Das die Schutzmaßnahmen maximal 20% des Jahresumsatz kosten dürfen",
            "C": "Das sich in vielen Fällen der höchste Schutzbedarf aller Anwendungen auf einem IT-System, als Schutzberdarf für das IT-System übernehmen lässt",
            "D": "Das nur die maximal wirksame Bausteine aus dem Grundschutzkompendium angewandt werden"
          },
          "right": ["C"]
        },
        "9": {
          "question": "Wenn bei der Schutzbedarfsfeststellung für ein IT-System Verteilungseffekte berücksichtigt werden, bedeutet dies, dass …",
          "answers": {
            "A": "… sich der Schutzbedarf des IT-Systems erhöht, weil sich Einzelschäden zu einem höheren Gesamt­schaden verteilen.",
            "B": "… sich der Schutzbedarf des IT-Systems verringert, weil geeignete, sich gegenseitig verstärkende Sicherheitsmaßnahmen im Einsatz sind.",
            "C": "… sich der Schutzbedarf des IT-Systems verringert, wenn eine Anwendung mit hohem Schutzbedarf auf mehrere Systeme verteilt ist.",
            "D": "… der Schutzbedarf geringer ist, wenn auf dem betreffenden IT-System nur weniger wichtige Teile dieser Anwendung ausgeführt werden."
          },
          "right": ["C", "D"]
        },
        "10": {
          "question": "Wer sollte bei der Abschätzung eines möglichen Schadens mit einbezogen werden?",
          "answers": {
            "A": "das Management, da sie letztlich die Verantwortung trägt und so bei Unstimmigkeiten entscheiden muss.",
            "B": "die Anwender, um aus ihrer Sicht realistische Schadensszenarien zu entwickeln.",
            "C": "die Verantwortlichen und die Benutzer der Anwendung,",
            "D": "die Auditoren für das angestrebte ISO 27001 - Zertifkat."
          },
          "right": ["A", "B", "C"]
        },
        "11": {
          "question": "Was ist bei der Schutzbedarfsfeststellungen besonders zu berücksichtigen?",
          "answers": {
            "A": "die Schutzbedarfsfeststellungen ausführlich zu begründen, so das die Entscheidung später nachvollzogen werden kann",
            "B": "das sich Schutzbedarfsfeststellung keinesfalls im Prozess verändern dürfen",
            "C": "das nur die Geschäftsführung zu Schutzbedarfsfeststellung berechtigt ist",
            "D": "das Schutzbedarfsfeststellungen dem Standard gemäß ISO 27003 entsprechend dokumentiert werden"
          },
          "right": ["A"]
        }
      },
      "Risikoanalyse": {
        "7": {
          "question": "In welchen Fällen besteht ein zusätzlicher Risiko-Analysebedarf?",
          "answers": {
            "A": "ein Zielobjekt hat einen hohen oder sehr hohen Schutzbedarf",
            "B": "es gibt eine aktualisierte Auflage des IT-Grundschutz-Kompendium",
            "C": "es gibt für ein Zielobjekt keinen hinreichend passenden Baustein im IT-Grundschutz-Kompendium",
            "D": "die Einsatzumgebung des Zielobjekts ist untypisch für den IT-Grundschutz"
          },
          "right": ["A", "C", "D"]
        },
        "8": {
          "question": "Was sind geeignete Methoden zur Risikoanalyse?",
          "answers": {
            "A": "BSI-Standard 200-1 Risikoanalyse auf der Basis von IT-Grundschutz",
            "B": "BSI-Standard 200-2 Risikoanalyse auf der Basis von IT-Grundschutz",
            "C": "BSI-Standard 200-3 Risikoanalyse auf der Basis von IT-Grundschutz",
            "D": "Schätzen mit Beratung durch den Hersteller oder unabhängige Sicherheitsberater"
          },
          "right": ["C", "D"]
        },
        "9": {
          "question": "Unter welchen Voraussetzungen ist ein zweiter IT-Grundschutz-Check notwendig?",
          "answers": {
            "A": "wenn dies der Auditor dies für die Vergabe des IT-Grundschutz Zertifikats verlangt",
            "B": "immer regelmäßig im Zyklus von 3 Jahren",
            "C": "wenn sich durch die Risikoanalyse das Sicherheitskonzept geändert hat",
            "D": "wenn der Umsetzungsstatus neu hinzugekommener oder geänderter Maßnahmen zu prüfen ist"
          },
          "right": ["C", "D"]
        }
      },
      "Umsetzungsplanung": {
        "7": {
          "question": "Was sind sinnvolle Schritte um Maßnahmen zu konsolidieren?",
          "answers": {
            "A": "Ergebnissen des IT-Grundschutz-Checks und eventuell durchgeführter Risikoanalysen filtern",
            "B": "Unzureichend erfüllten Anforderungen nach den betroffenen Zielobjekten gruppieren",
            "C": "Einen Termin für den Rechenschaftsbericht der Bereichsverantwortlichen koordinieren",
            "D": "Maßnahmen festlegen, mit denen Sie die verbleibenden Sicherheitslücken schließen können"
          },
          "right": ["A", "B", "D"]
        },
        "8": {
          "question": "Was sind Handlungsoptionen, wenn die bewilligten Finanzmittel nicht für die sofortige Umsetzung sämtlicher Maßnahmen ausreichen?",
          "answers": {
            "A": "Informationssicherheit muss die höchste Priorität für ein Unternehmen haben, daher müssen die Geschäftführer durch ihr Privatvermögen die Mittel bereitstellen",
            "B": "Das Budget muss aufgestockt werden",
            "C": "Über die KfW können Mittel aus dem nationalen Fonds für Cybersicherheit beantragt werden",
            "D": "Die Restrisiken müssen getragen werden"
          },
          "right": ["B", "D"]
        }
      },
      "Notfallmanagement initiieren": {
        "7": {
          "question": "Welche Aufgaben fallen in den Arbeitsbereich des Notfallbeauftragten?",
          "answers": {
            "A": "die Koordination der Anfertigung der Sicherheitsleitlinie",
            "B": "die Umsetzung von Maßnahmen zur Notfallprävention",
            "C": "die Überwachung der Einrichtungen zur frühzeitigen Erkennen von Notfällen (z. B. Alarmanlagen)",
            "D": "die Koordination der Entwicklung des Notfallvorsorgekonzepts"
          },
          "right": ["A", "D"]
        }
      },
      "Business Impact Analyse": {
        "7": {
          "question": "Welche Aussagen zur Erhebung der Ressourcen im Rahmen einer Business Impact Analyse sind zutreffend?",
          "answers": {
            "A": "Wenn Sie die Ressourcen zusammen mit der Schadensanalyse erheben, können Sie beides in einem einzigen Gespräch erledigen.",
            "B": "Wenn Sie die Ressourcen erst nach der Schadensanalyse erheben, können Sie sich auf die kritischen Prozesse beschränken.",
            "C": "Wenn Sie die Ressourcen vor der Schadensanalyse erheben, erübrigt sich in vielen Fällen eine gesonderte Schadensanalyse.",
            "D": "Nur dann, wenn Sie zuvor erhoben haben, welche Ressourcen ein Geschäftsprozess benötigt, können Sie den möglichen Schaden einer Unterbrechung exakt analysieren."
          },
          "right": ["A", "B"]
        },
        "8": {
          "question": "Mit welchen Kenngrößen beschreiben Sie Anforderungen an den Wiederanlauf eines Geschäftsprozesses?",
          "answers": {
            "A": "maximal tolerierbare Ausfallzeit",
            "B": "Wiederanlaufzeit",
            "C": "maximale Anzahl an Wiederanlaufversuchen",
            "D": "Wiederanlauf-Niveau"
          },
          "right": ["A", "B", "D"]
        },
        "9": {
          "question": "Welche Vorgehensweisen erhöhen die Qualität und Effizienz einer Business Impact Analyse?",
          "answers": {
            "A": "Ein allgemeiner Fragebogen zur Erhebung von generellen Informationen",
            "B": "Gezielten Interviews mit kompetenten Vertretern",
            "C": "Einführende Workshops mit den Beteiligten zum Sinn des Notfallmanagement",
            "D": "Zusicherung der Unterstützung durch das Management einholen"
          },
          "right": ["A", "B", "C", "D"]
        },
        "10": {
          "question": "Welche Aussagen zu Prozessen im Rahmen einer einer Business Impact Analyse sind richtig?",
          "answers": {
            "A": "In einer Business Impact Analyse muss man Hauptprozesse und Begleitprozesse unterscheiden",
            "B": "In einer Business Impact Analyse muss man Kernprozesse und Hilfsprozesse unterscheiden",
            "C": "Unterstützende Prozesse können auch zu den hochgradig kritischen Prozessen einer Einrichtung gehören",
            "D": "Als Faustregel empfiehlt der BSI-Standard 100-4, zwischen 5 - 15 Prozesse pro Organisationseinheit zu betrachten"
          },
          "right": ["B", "C", "D"]
        }
      }
    }
  };

  // DOM-Elemente
  const startScreen = document.getElementById('start-screen');
  const categoryScreen = document.getElementById('category-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultsScreen = document.getElementById('results-screen');
  const startBtn = document.getElementById('start-btn');
  const categoriesContainer = document.getElementById('categories-container');
  const randomCategoryBtn = document.getElementById('random-category-btn');
  const categoryDisplay = document.getElementById('category-display');
  const questionContainer = document.getElementById('question-container');
  const answersContainer = document.getElementById('answers-container');
  const answerOptions = document.querySelectorAll('.answer-option');
  const submitBtn = document.getElementById('submit-btn');
  const feedbackContainer = document.getElementById('feedback-container');
  const feedbackMessage = document.getElementById('feedback-message');
  const correctAnswers = document.getElementById('correct-answers');
  const nextBtn = document.getElementById('next-btn');
  const scoreDisplay = document.getElementById('score-display');
  const percentageDisplay = document.getElementById('percentage-display');
  const restartBtn = document.getElementById('restart-btn');
  const progressBar = document.getElementById('progress-bar');

  // Quiz-Zustandsvariablen
  let categories = Object.keys(quizData.quiz);
  let currentCategory = null;
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let selectedAnswers = [];
  let score = 0;
  let totalQuestions = 0;

  // Event-Listener
  startBtn.addEventListener('click', showCategoryScreen);
  randomCategoryBtn.addEventListener('click', () => startQuiz('random'));
  submitBtn.addEventListener('click', checkAnswer);
  nextBtn.addEventListener('click', showNextQuestion);
  restartBtn.addEventListener('click', restartQuiz);

  // Antwortoptionen auswählbar machen
  answerOptions.forEach(option => {
    option.addEventListener('click', () => {
      const optionLetter = option.getAttribute('data-option');
      
      if (selectedAnswers.includes(optionLetter)) {
        // Wenn bereits ausgewählt, Auswahl aufheben
        selectedAnswers = selectedAnswers.filter(letter => letter !== optionLetter);
        option.classList.remove('selected');
      } else {
        // Sonst auswählen
        selectedAnswers.push(optionLetter);
        option.classList.add('selected');
      }
    });
  });

  // Funktionen
  function showCategoryScreen() {
    startScreen.classList.add('hidden');
    categoryScreen.classList.remove('hidden');
    
    // Kategorien anzeigen
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
      if (Object.keys(quizData.quiz[category]).length > 0) {
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('category-btn');
        categoryBtn.textContent = category;
        categoryBtn.addEventListener('click', () => startQuiz(category));
        categoriesContainer.appendChild(categoryBtn);
      }
    });
  }

  function startQuiz(category) {
    categoryScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Quiz initialisieren
    currentCategory = category;
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    
    // Fragen sammeln
    if (category === 'random') {
      // Zufällige Fragen aus allen Kategorien
      categories.forEach(cat => {
        const categoryQuestions = Object.keys(quizData.quiz[cat]);
        categoryQuestions.forEach(questionId => {
          currentQuestions.push({
            category: cat,
            id: questionId,
            ...quizData.quiz[cat][questionId]
          });
        });
      });
      
      // Mischen und auf 5 Fragen begrenzen
      shuffleArray(currentQuestions);
      currentQuestions = currentQuestions.slice(0, 5);
    } else {
      // Alle Fragen aus der gewählten Kategorie
      const categoryQuestions = Object.keys(quizData.quiz[category]);
      categoryQuestions.forEach(questionId => {
        currentQuestions.push({
          category: category,
          id: questionId,
          ...quizData.quiz[category][questionId]
        });
      });
      
      // Mischen
      shuffleArray(currentQuestions);
    }
    
    totalQuestions = currentQuestions.length;
    showQuestion();
  }

  function showQuestion() {
    // Fortschrittsbalken aktualisieren
    progressBar.style.width = `${(currentQuestionIndex / totalQuestions) * 100}%`;
    
    // Ausgewählte Antworten zurücksetzen
    selectedAnswers = [];
    answerOptions.forEach(option => {
      option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Feedback ausblenden
    feedbackContainer.classList.add('hidden');
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // Kategorie anzeigen
    categoryDisplay.textContent = currentQuestion.category;
    
    // Frage anzeigen
    questionContainer.textContent = currentQuestion.question;
    
    // Antwortoptionen anzeigen
    answerOptions.forEach(option => {
      const optionLetter = option.getAttribute('data-option');
      const optionText = option.querySelector('.option-text');
      optionText.textContent = currentQuestion.answers[optionLetter];
    });
  }

  function checkAnswer() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const correctAnswerLetters = currentQuestion.right;
    
    // Antworten markieren
    answerOptions.forEach(option => {
      const optionLetter = option.getAttribute('data-option');
      
      if (correctAnswerLetters.includes(optionLetter)) {
        option.classList.add('correct');
      } else if (selectedAnswers.includes(optionLetter)) {
        option.classList.add('incorrect');
      }
    });
    
    // Prüfen, ob alle richtigen Antworten ausgewählt wurden und keine falschen
    const allCorrectSelected = correctAnswerLetters.every(letter => selectedAnswers.includes(letter));
    const noIncorrectSelected = selectedAnswers.every(letter => correctAnswerLetters.includes(letter));
    const isCorrect = allCorrectSelected && noIncorrectSelected;
    
    // Feedback anzeigen
    feedbackContainer.classList.remove('hidden');
    
    if (isCorrect) {
      feedbackMessage.textContent = "Richtig! Alle korrekten Antworten wurden ausgewählt.";
      score++;
    } else {
      feedbackMessage.textContent = "Falsch!";
      
      // Richtige Antworten anzeigen
      correctAnswers.textContent = `Die richtigen Antworten sind: ${correctAnswerLetters.map(letter => 
        `${letter}: ${currentQuestion.answers[letter]}`).join(', ')}`;
    }
  }

  function showNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    scoreDisplay.textContent = `Du hast ${score} von ${totalQuestions} Fragen richtig beantwortet.`;
    const percentage = (score / totalQuestions) * 100;
    percentageDisplay.textContent = `Erfolgsquote: ${percentage.toFixed(1)}%`;
  }

  function restartQuiz() {
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
  }

  // Hilfsfunktion zum Mischen eines Arrays
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
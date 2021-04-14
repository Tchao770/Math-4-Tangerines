function ProblemSet({ problemList }) {
    return (
        <div>
            {
                problemList.map((problem, index) => {
                    return <p key={index}>{problem}</p>
                })
            }
        </div>
    );
}

export default ProblemSet;
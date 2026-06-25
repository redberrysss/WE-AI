import useSurveyData from "../hooks/useSurveyData";
import KpiCard from "./KpiCard";
import DonutChartCard from "./DonutChartCard";
import BarChartCard from "./BarChartCard";
import HorizontalBarChartCard from "./HorizontalBarChartCard";

export default function Dashboard() {
  const rows = useSurveyData();

  const totalRespondents = rows.length;

  // Helper function to find column name flexibly (handles newlines, extra spaces)
  const findColumnName = (searchText) => {
    if (rows.length === 0) return searchText;
    const columns = Object.keys(rows[0]);
    const found = columns.find(col => 
      col.includes(searchText) || 
      searchText.includes(col.replace(/\s+/g, ' ').trim())
    );
    return found || searchText;
  };

  const countBy = (columnName) => {
    const actualColumnName = findColumnName(columnName);
    const result = {};

    rows.forEach((row) => {
      const value = row[actualColumnName];

      if (value && value !== "") {
        result[value] = (result[value] || 0) + 1;
      }
    });

    return Object.entries(result).map(([name, value]) => ({
      name,
      value,
      percent:
        totalRespondents > 0
          ? Number(((value / totalRespondents) * 100).toFixed(1))
          : 0,
    }));
  };

  const getCount = (columnName, answer) => {
    const actualColumnName = findColumnName(columnName);
    return rows.filter((row) => row[actualColumnName] === answer).length;
  };

  const getPercent = (count) => {
    if (totalRespondents === 0) return "0%";
    return `${((count / totalRespondents) * 100).toFixed(1)}%`;
  };

  const femaleCount = getCount("Jantina", "Perempuan");
  const womenLedCount = getCount(
    "Adakah anda mewakili perniagaan kecil yang diterajui wanita? \n(Perniagaan yang diterajui wanita bermaksud sekurang-kurangnya 51% dimiliki, diurus, atau dikawal oleh seorang atau lebih wanita.)",
    "Ya"
  );
  const over5YearsCount = getCount(
    "Berapa lama perniagaan anda telah beroperasi?",
    "Lebih daripada 5 tahun"
  );
  const soleProprietorCount = getCount(
    "Berapa orang yang bekerja dalam perniagaan anda, termasuk anda sendiri?",
    "1 (saya seorang sahaja)"
  );
  const spmCount = getCount("Tahap Pendidikan Tertinggi", "Sekolah Menengah");

  const genderData = countBy("Jantina");
  const womenLedData = countBy(
    "Adakah anda mewakili perniagaan kecil yang diterajui wanita? \n(Perniagaan yang diterajui wanita bermaksud sekurang-kurangnya 51% dimiliki, diurus, atau dikawal oleh seorang atau lebih wanita.)"
  );
  const ageGroupData = countBy("Anda berada dalam kumpulan umur yang mana?");
  const businessDurationData = countBy(
    "Berapa lama perniagaan anda telah beroperasi?"
  );
  const businessSizeData = countBy(
    "Berapa orang yang bekerja dalam perniagaan anda, termasuk anda sendiri?"
  );
  const sectorData = countBy("Apakah sektor utama perniagaan anda?");
  const educationData = countBy("Tahap Pendidikan Tertinggi");
  const stateData = countBy("Negeri Operasi Perniagaan");

  return (
    <main className="dashboard">
      {/* Header Section */}
      <section className="dashboard-header">
        <div className="header-content">
          <h1>
            Empowering Women-Led MSMEs in ASEAN to Engage with Safe, Practical AI Tools
          </h1>
          <h2>Survey Respondents Dashboard</h2>
        </div>

        <div className="total-respondents-card">
          <p>Total Respondents</p>
          <h1>{totalRespondents}</h1>
        </div>
      </section>

      {/* KPI Cards Row */}
      <section className="kpi-row">
        <KpiCard
          title="Gender (Female)"
          value={getPercent(femaleCount)}
          subtitle={`${femaleCount} Respondents`}
          icon="👩"
        />

        <KpiCard
          title="Women-Led MSMEs"
          value={getPercent(womenLedCount)}
          subtitle={`${womenLedCount} Respondents`}
          icon="👩‍💼"
        />

        <KpiCard
          title="Operating > 5 Years"
          value={getPercent(over5YearsCount)}
          subtitle={`${over5YearsCount} Respondents`}
          icon="📅"
        />

        <KpiCard
          title="Sole Proprietor (1 person)"
          value={getPercent(soleProprietorCount)}
          subtitle={`${soleProprietorCount} Respondents`}
          icon="👤"
        />

        <KpiCard
          title="Highest Education: SPM"
          value={getPercent(spmCount)}
          subtitle={`${spmCount} Respondents`}
          icon="🎓"
        />
      </section>

      {/* First Row of Charts */}
      <section className="chart-row">
        <div className="chart-card">
          <DonutChartCard title="Gender" data={genderData} />
        </div>
        <div className="chart-card">
          <BarChartCard title="Age Group" data={ageGroupData} />
        </div>
        <div className="chart-card">
          <HorizontalBarChartCard
            title="Business Size (Number of People)"
            data={businessSizeData}
          />
        </div>
      </section>

      {/* Second Row of Charts */}
      <section className="chart-row">
        <div className="chart-card">
          <DonutChartCard title="Women-Led MSME" data={womenLedData} />
        </div>
        <div className="chart-card">
          <HorizontalBarChartCard
            title="Primary Business Sector"
            data={sectorData}
          />
        </div>
        <div className="chart-card">
          <DonutChartCard
            title="Highest Education Level"
            data={educationData}
          />
        </div>
      </section>

      {/* Third Row of Charts */}
      <section className="chart-row">
        <div className="chart-card">
          <HorizontalBarChartCard
            title="Business Operation Duration"
            data={businessDurationData}
          />
        </div>
        <div className="chart-card">
          <BarChartCard
            title="Business Operation by State"
            data={stateData}
          />
        </div>
        <div className="chart-card">
          <div className="state-statistics-card">
            <h3>State Statistics</h3>
            <div className="stat-item">
              <span>Total States:</span>
              <strong>{stateData.length}</strong>
            </div>
            <div className="stat-item">
              <span>Top State:</span>
              <strong>{stateData[0]?.name || 'N/A'}</strong>
            </div>
            <div className="stat-item">
              <span>Top State Count:</span>
              <strong>{stateData[0]?.value || 0}</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
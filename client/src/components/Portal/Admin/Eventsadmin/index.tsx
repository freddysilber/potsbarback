import React, { useState } from "react";
import Calendar from "react-calendar";
import { setConstantValue } from "typescript";

const dummyData = [
  {
    id: 0,
    title: "Both Venues Kicking",
    BarSales: 15000000,
    BarCOG: 480000,
    Sales_Labor: 90000,
    Floor_Labor: 220000,
    Fixed: 163400,
    Total_Cost: 953400,
    Sub_Net: 546600,
    Service_Fee: 220000,
    Split_Fee: 321000,
    Actual_Net: 10876000,
    Venue_Net_Goal: 500000,
    Plus_Minus_Goal: 587600,
    Door_Sales: 1500000,
    Entertainment: 120000,
    Advertising_Marketing: 50000,
    Cashiers: 22500,
    Managers: 17500,
    Promotors_Door_Cost: 210000,
    Staffing_Door_Cost: 220000,
    Net_Before_Split: 1070000,
    GVO_Percent_Rake: 321000,
    Promo_Percent_Rake: 749000,
    Promoter_Net_Goals: 200000,
    Plus_Minus2_Goal: 549000,
  },
  {
    id: 1,
    title: "Nightly Goals",
    BarSales: 15000000,
    BarCOG: 480000,
    Sales_Labor: 90000,
    Floor_Labor: 220000,
    Fixed: 163400,
    Total_Cost: 953400,
    Sub_Net: 546600,
    Service_Fee: 220000,
    Split_Fee: 321000,
    Actual_Net: 10876000,
    Venue_Net_Goal: 500000,
    Plus_Minus_Goal: 587600,
    Door_Sales: 1500000,
    Entertainment: 120000,
    Advertising_Marketing: 50000,
    Cashiers: 22500,
    Managers: 17500,
    Promotors_Door_Cost: 210000,
    Staffing_Door_Cost: 220000,
    Net_Before_Split: 1070000,
    GVO_Percent_Rake: 321000,
    Promo_Percent_Rake: 749000,
    Promoter_Net_Goals: 200000,
    Plus_Minus2_Goal: 549000,
  },
  {
    id: 2,
    title: "Minimum Sales",
    BarSales: 15000000,
    BarCOG: 480000,
    Sales_Labor: 90000,
    Floor_Labor: 220000,
    Fixed: 163400,
    Total_Cost: 953400,
    Sub_Net: 546600,
    Service_Fee: 220000,
    Split_Fee: 321000,
    Actual_Net: 10876000,
    Venue_Net_Goal: 500000,
    Plus_Minus_Goal: 587600,
    Door_Sales: 1500000,
    Entertainment: 120000,
    Advertising_Marketing: 50000,
    Cashiers: 22500,
    Managers: 17500,
    Promotors_Door_Cost: 210000,
    Staffing_Door_Cost: 220000,
    Net_Before_Split: 1070000,
    GVO_Percent_Rake: 321000,
    Promo_Percent_Rake: 749000,
    Promoter_Net_Goals: 200000,
    Plus_Minus2_Goal: 549000,
  },
  {
    id: 3,
    title: "Break Even",
    BarSales: 15000000,
    BarCOG: 480000,
    Sales_Labor: 90000,
    Floor_Labor: 220000,
    Fixed: 163400,
    Total_Cost: 953400,
    Sub_Net: 546600,
    Service_Fee: 220000,
    Split_Fee: 321000,
    Actual_Net: 10876000,
    Venue_Net_Goal: 500000,
    Plus_Minus_Goal: 587600,
    Door_Sales: 1500000,
    Entertainment: 120000,
    Advertising_Marketing: 50000,
    Cashiers: 22500,
    Managers: 17500,
    Promotors_Door_Cost: 210000,
    Staffing_Door_Cost: 220000,
    Net_Before_Split: 1070000,
    GVO_Percent_Rake: 321000,
    Promo_Percent_Rake: 749000,
    Promoter_Net_Goals: 200000,
    Plus_Minus2_Goal: 549000,
  },
];

interface Projections {
  formDisplay: number;
}

const Eventadmin = () => {
  const [value, onChange] = useState<Date | Date[]>(new Date());
  const [date, _date] = useState(Date());
  const [formDisplay, _formDisplay] = useState(0);
  // const handleChange = (event:any) => {
  //     console.log(formDisplay)
  //      _formDisplay({newForm: event.target.value})
  // }

  return (
    <div className="card staff-input-form">
      <div className="title">Events</div>
      <Calendar onChange={onChange} value={value} />
      <>
        <div className="select m-4">
          <select
            onChange={(e) => {
              _formDisplay(Number(e.target.value));
            }}
          >
            <option value={0}>Both Venues</option>
            <option value={1}>Nightly Goals</option>
            <option value={2}>Break Even</option>
            <option value={3}>Min Sales</option>
          </select>
        </div>
        {/* HIDDEN
        {
        dummyData.map((items, formDisplay) =>
             formDisplay === items.id ? 
            <div>{items.title}</div> : <div></div>
            )}
        END HIDDEN */}

        {formDisplay === 0 ? (
          <div className="card has-background-grey-lighter p-2 has-text-weight-bold">
            <div className="px-4 has-background-dark has-text-white is-flex is-justify-content-space-between is-align-content-center">
              <div className="subtitle is-align-items-center has-text-white">
                {dummyData[0].title}
              </div>
              <div className="is-flex is-align-content-center">
                <button className="mb-2 button is-danger is-small">SAVE</button>
              </div>
            </div>
            <div className="columns is-multiline p-4">
              <div className="column is-one-forth p-4">
                <span>Bar Sales</span>
                <span>Bar COG 32%</span>
                <span>Sales Labor</span>
                <span>Floor Labor</span>
                <span>Fixed</span>
                <span>TOTAL GVO COST</span>
                <span>Sub Net</span>
                <span>Service Fee</span>
                <span>Split Fee</span>
                <span>Actual Net</span>
                <span>Venue Net Goal</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
              <div className="column is-one-forth">
                <span>Door Sales</span>
                <span>Entertainment</span>
                <span>Advertising/Marketing</span>
                <span>Cashiers</span>
                <span>Managers</span>
                <span>Promotors Door Cost</span>
                <span>GVO Staffing Door Cost</span>
                <span>Net Before Split</span>
                <span>GVO % (30%)</span>
                <span>Promo (70%)</span>
                <span>Promoter Net Goals</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {/* END CARD ONE */}
        {formDisplay === 1 ? (
          <div className="card has-background-grey-lighter p-2 has-text-weight-bold">
            <div className="px-4 has-background-success has-text-white is-flex is-justify-content-space-between is-align-content-center">
              <div className="subtitle is-align-items-center has-text-white">
                Nightly Goals
              </div>
              <div className="is-flex is-align-content-center">
                <button className="mb-2 button is-danger is-small">SAVE</button>
              </div>
            </div>
            <div className="columns is-multiline p-4">
              <div className="column is-one-forth p-4">
                <span>Bar Sales</span>
                <span>Bar COG 32%</span>
                <span>Sales Labor</span>
                <span>Floor Labor</span>
                <span>Fixed</span>
                <span>TOTAL GVO COST</span>
                <span>Sub Net</span>
                <span>Service Fee</span>
                <span>Split Fee</span>
                <span>Actual Net</span>
                <span>Venue Net Goal</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
              <div className="column is-one-forth">
                <span>Door Sales</span>
                <span>Entertainment</span>
                <span>Advertising/Marketing</span>
                <span>Cashiers</span>
                <span>Managers</span>
                <span>Promotors Door Cost</span>
                <span>GVO Staffing Door Cost</span>
                <span>Net Before Split</span>
                <span>GVO % (30%)</span>
                <span>Promo (70%)</span>
                <span>Promoter Net Goals</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {/* END CARD TWO */}
        {formDisplay === 2 ? (
          <div className="card has-background-grey-lighter p-2 has-text-weight-bold">
            <div className="px-4 has-background-danger has-text-white is-flex is-justify-content-space-between is-align-content-center">
              <div className="subtitle is-align-items-center has-text-white">
                Break Even
              </div>
              <div className="is-flex is-align-content-center">
                <button className="mb-2 button is-danger is-small">SAVE</button>
              </div>
            </div>
            <div className="columns is-multiline p-4">
              <div className="column is-one-forth p-4">
                <span>Bar Sales</span>
                <span>Bar COG 32%</span>
                <span>Sales Labor</span>
                <span>Floor Labor</span>
                <span>Fixed</span>
                <span>TOTAL GVO COST</span>
                <span>Sub Net</span>
                <span>Service Fee</span>
                <span>Split Fee</span>
                <span>Actual Net</span>
                <span>Venue Net Goal</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
              <div className="column is-one-forth">
                <span>Door Sales</span>
                <span>Entertainment</span>
                <span>Advertising/Marketing</span>
                <span>Cashiers</span>
                <span>Managers</span>
                <span>Promotors Door Cost</span>
                <span>GVO Staffing Door Cost</span>
                <span>Net Before Split</span>
                <span>GVO % (30%)</span>
                <span>Promo (70%)</span>
                <span>Promoter Net Goals</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {/* END CARD three */}
        {formDisplay === 3 ? (
          <div className="card has-background-grey-lighter p-2 has-text-weight-bold">
            <div className="px-4 has-background-primary has-text-white is-flex is-justify-content-space-between is-align-content-center">
              <div className="subtitle is-align-items-center has-text-white">
                Min Sales
              </div>
              <div className="is-flex is-align-content-center">
                <button className="mb-2 button is-danger is-small">SAVE</button>
              </div>
            </div>
            <div className="columns is-multiline p-4">
              <div className="column is-one-forth p-4">
                <span>Bar Sales</span>
                <span>Bar COG 32%</span>
                <span>Sales Labor</span>
                <span>Floor Labor</span>
                <span>Fixed</span>
                <span>TOTAL GVO COST</span>
                <span>Sub Net</span>
                <span>Service Fee</span>
                <span>Split Fee</span>
                <span>Actual Net</span>
                <span>Venue Net Goal</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
              <div className="column is-one-forth">
                <span>Door Sales</span>
                <span>Entertainment</span>
                <span>Advertising/Marketing</span>
                <span>Cashiers</span>
                <span>Managers</span>
                <span>Promotors Door Cost</span>
                <span>GVO Staffing Door Cost</span>
                <span>Net Before Split</span>
                <span>GVO % (30%)</span>
                <span>Promo (70%)</span>
                <span>Promoter Net Goals</span>
                <span>+/- Goal</span>
              </div>
              <div className="column is-one-forth p-4">
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <input
                    className="is-small"
                    style={{ textAlign: "right" }}
                    placeholder="$0"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {/* END CARD FOUR */}
      </>
    </div>
  );
};

export default Eventadmin;

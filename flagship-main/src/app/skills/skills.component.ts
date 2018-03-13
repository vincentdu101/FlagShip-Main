import {Component} from "@angular/core";
import {SkillsService} from "../services/skills/skills.service";
import * as d3 from "d3";

@Component({
	selector: "skills",
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.scss"]
})

export class SkillsComponent {
	
	public skills: Array<any> = [];
	private categories = ['', 'Accessories', 'Audiophile', 'Camera & Photo', 'Cell Phones', 'Computers', 'eBook Readers', 'Gadgets', 'GPS & Navigation', 'Home Audio', 'Office Electronics', 'Portable Audio', 'Portable Video', 'Security & Surveillance', 'Service', 'Television & Video', 'Car & Vehicle'];
	private dollars = [213, 209, 190, 179, 156, 209, 190, 179, 213, 209, 190, 179, 156, 209, 190, 190];
	private colors = ["blue", "blue"];
	private grid;
	private grids;
	private tickVals;
	private xScale;
	private yScale;
	private colorScale;
	private canvas;
	private width: string = "600";
	private height: string = "300";
	private generator;
	private range;

	constructor(private skillsService: SkillsService) {
		this.skillsService.getSkills().subscribe((data) => {
			this.skills = data;
		});
		this.setupCharts();
	}

	private setupCharts(): void {
		this.setupInitialParts();
		this.setupCanvasAndGrids();
		this.setupAxes();
		this.setupChartAndTransitions();
	}

	private setupInitialParts(): void {
		this.generator = d3.scaleLinear()
			.domain([0, (this.categories.length - 1) / 2, this.categories.length - 1])
			.range([
				d3.hsl(-100, 0.95, 0.52),
				d3.hsl(80, 1.15, 0.62),
				d3.hsl(0, 0.55, 0.52)]
			)
			.interpolate(d3.interpolateCubehelix);

		this.range = d3.range(this.categories.length).map(this.generator)

		this.grid = d3.range(25).map(() => {
			return {"x1": 0, "y1": 0, "x2": 0, "y2": 480};
		});

		this.tickVals = this.grid.map((i) => {
			return (i > 0) ? i * 10 : 100;
		});
		
		this.xScale = d3.scaleLinear()
			.domain([10, 250])
			.range([0, 722]);

		this.yScale = d3.scaleLinear()
			.domain([0, this.categories.length])
			.range([0, 480]);

		this.colorScale = d3.scaleQuantize()
			.domain([0, 1])
			.range(this.range);
	}

	private setupCanvasAndGrids(): void {
		this.canvas = d3.select(".skills-bar-chart")
			.append("svg")
			.attr("width", this.width)
			.attr("height", this.height);

		this.grids = this.canvas.append("g")
			.attr("id", "grid")
			.attr("transform", "translate(150, 10)")
			.selectAll("line")
			.data(this.grid)
			.enter()
			.append("line")
			.attr({
				"x1": (d, i) => { return i * 30; },
				"y1": (d) => { return d.y1; },
				"x2": (d, i) => { return i * 30; },
				"y2": (d) => { return d.y2; }
			})
			.style({"stroke": "#adadad", "stroke-width": "1px"});
	}

	private setupAxes(): void {
		let yXis = this.canvas.append("g")
			.attr("transform", "translate(150, 0)")
			.attr("id", "y-axis")
			.call(d3.axisBottom(this.xScale)
				.tickValues(this.tickVals));

		let xXis = this.canvas.append("g")
			.attr("transform", "translate(150, 480)")
			.attr("id", "x-axis")
			.call(d3.axisLeft(this.yScale)
				.tickSize(2)
				.tickFormat((d, i) => { return this.categories[i]; })
				.tickValues(d3.range(17)));
	}

	private setupChartAndTransitions(): void {
		let chart = this.canvas.append("g")
			.attr("transform", "translate(150, 0)")
			.attr("id", "bars")
			.selectAll("rect")
			.data(this.dollars)
			.enter()
			.append("rect")
			.attr("height", 19)
			.attr({ "x": 0, "y": (d, i) => { return this.yScale(i) + 19; } })
			.style("fill", (d, i) => { return this.colorScale(i); })
			.attr({ "width": (d) => { return 0; } });

		let transit = d3.select("svg").selectAll("rect")
			.data(this.dollars)
			.transition()
			.duration(1000)
			.attr("width", (d) => { return this.xScale(d); });

		let transitText = d3.select("#bar")
			.selectAll("text")
			.data(this.dollars)
			.enter()
			.append("text")
			.attr("x", (d) => { return this.xScale(d) - 200; })
			.attr("y", (d, i) => { return this.yScale(i) + 35; })
			.text((d) => { return d + "%"; })
			.style("fill", "#fff")
			.style("font-size", "14px");
	}

	private setupTick

}
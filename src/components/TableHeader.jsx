// components/TableHeader.js
import React from "react";
import { Dropdown } from "react-bootstrap";

const TableHeader = ({ onSort }) => {
	return (
		<thead>
			<tr>
				<th>
					Username
					<Dropdown>
						<Dropdown.Toggle
							variant="secondary"
							size="sm"
						>
							Sort
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() =>
									onSort(
										"SORT_USERNAME_ASC"
									)
								}
							>
								Rosnąca
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() =>
									onSort(
										"SORT_USERNAME_DESC"
									)
								}
							>
								Malejąca
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() =>
									onSort(
										"RESET"
									)
								}
							>
								Powrót
								do
								naturalnej
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</th>
				<th>
					Post Title
					<Dropdown>
						<Dropdown.Toggle
							variant="secondary"
							size="sm"
						>
							Sort
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() =>
									onSort(
										"SORT_TITLE_ASC"
									)
								}
							>
								Rosnąca
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() =>
									onSort(
										"SORT_TITLE_DESC"
									)
								}
							>
								Malejąca
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() =>
									onSort(
										"RESET"
									)
								}
							>
								Powrót
								do
								naturalnej
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</th>
				<th>Comments</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
